export type Screen = 'GetStarted' | 'Auth' | 'Home';

export interface NavigateProps {
  navigate: (to: Screen) => void;
}
