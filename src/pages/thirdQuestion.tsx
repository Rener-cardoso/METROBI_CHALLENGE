export function ThirdQuestion() {
  return (
    <div className="max-w-5xl h-screen mx-auto text-lg flex flex-col gap-2 font-bold">
      <header className="bg-sky-400 py-4 flex items-center justify-center">
        Header
      </header>

      <div className="grid grid-cols-3 h-[80%] gap-2">
        <div className="grid grid-rows-3 gap-2">
          <aside className="bg-violet-300">Hero</aside>
          <aside className="bg-lime-400 row-span-2">Sidebar</aside>
        </div>

        <div className="grid grid-rows-3 col-span-2 gap-2">
          <main className="bg-yellow-400 row-span-2">Main content</main>
          <div className="bg-gray-400">Extra Content</div>
        </div>
      </div>

      <section className="grid grid-cols-3 gap-2 min-h-[10rem]">
        <div className="bg-emerald-500 col-span-2 py-4">Related Images</div>
        <div className="bg-fuchsia-200 py-4">Related Posts</div>
      </section>

      <footer className="bg-orange-400 py-4 flex items-center justify-center">Footer</footer>
    </div>
  )
}