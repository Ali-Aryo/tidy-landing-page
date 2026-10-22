const businesses = ['Salons', 'Clinics', 'Contractors', 'Restaurants', 'Bookkeepers', 'Gyms', 'Cleaners', 'And more.']

export default function BusinessStrip() {
  return (
    <section className="px-6 pb-6 text-center">
      <div className="mx-auto max-w-[1120px]">
        <p className="mt-0 mb-6 text-[15px] text-subtle">Built for the small businesses that keep Vancouver running.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-3.5 font-display text-[24px] font-semibold tracking-[-0.02em] text-faint">
          {businesses.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
