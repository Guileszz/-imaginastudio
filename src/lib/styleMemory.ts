import fs from 'fs';
import path from 'path';

export interface StyleProfile {
  dominantColors: string[];
  moodKeywords: string[];
  composition: string;
  texture: string;
  lastUpdated: string;
}

const PROFILE_PATH = '/home/team/shared/images/style-profile.json';

export function getStyleProfile(): StyleProfile | null {
  if (!fs.existsSync(PROFILE_PATH)) {
    return null;
  }
  try {
    const data = fs.readFileSync(PROFILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading style profile:', error);
    return null;
  }
}

export function saveStyleProfile(profile: StyleProfile) {
  try {
    fs.writeFileSync(PROFILE_PATH, JSON.stringify(profile, null, 2));
  } catch (error) {
    console.error('Error saving style profile:', error);
  }
}

export function updateStyleProfile(newAnalysis: Partial<StyleProfile>) {
  const current = getStyleProfile() || {
    dominantColors: [],
    moodKeywords: [],
    composition: '',
    texture: '',
    lastUpdated: new Date().toISOString(),
  };

  const updated: StyleProfile = {
    dominantColors: Array.from(new Set([...current.dominantColors, ...(newAnalysis.dominantColors || [])])).slice(-5),
    moodKeywords: Array.from(new Set([...current.moodKeywords, ...(newAnalysis.moodKeywords || [])])).slice(-10),
    composition: newAnalysis.composition || current.composition,
    texture: newAnalysis.texture || current.texture,
    lastUpdated: new Date().toISOString(),
  };

  saveStyleProfile(updated);
  return updated;
}

export function getStyleMemoryPrompt(): string {
  const profile = getStyleProfile();
  if (!profile) return '';

  const colors = profile.dominantColors.length > 0 ? `Dominant colors: ${profile.dominantColors.join(', ')}. ` : '';
  const mood = profile.moodKeywords.length > 0 ? `Mood: ${profile.moodKeywords.join(', ')}. ` : '';
  const comp = profile.composition ? `Composition: ${profile.composition}. ` : '';
  const texture = profile.texture ? `Texture: ${profile.texture}. ` : '';

  return `Follow this learned style: ${colors}${mood}${comp}${texture}`.trim();
}
