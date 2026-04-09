export default function Footer() {
  return (
    <footer className="py-10 text-center">
      <div className="section-spacer" />
      <p className="text-xs text-text-muted tracking-wide">
        Jay Yoon &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
