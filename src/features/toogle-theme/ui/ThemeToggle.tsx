import { SunSvg, MoonSvg } from '@/shared/assets';
import { ToggleWrapper } from '@/features/toogle-theme/ui/ThemeToggle.styles.ts';
import { useThemeStore } from '@/app/store';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <ToggleWrapper onClick={() => toggleTheme()}>{isDark ? <SunSvg /> : <MoonSvg />}</ToggleWrapper>
  );
};

export default ThemeToggle;
