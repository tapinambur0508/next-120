import css from "./About.module.css";

interface AboutLayoutProps {
  children: React.ReactNode;
}

function AboutLayout({ children }: AboutLayoutProps) {
  return <div className={css.container}>{children}</div>;
}

export default AboutLayout;
