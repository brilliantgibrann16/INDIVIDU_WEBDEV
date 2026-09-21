function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xl font-bold text-white">
          Brand<span className="text-pink-500">Ku</span>
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BrandKu App. All rights reserved. Tugas Web Application Development.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
