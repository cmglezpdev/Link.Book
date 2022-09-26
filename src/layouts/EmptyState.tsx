import { Category } from '../components'

export const EmptyState = () => {
  return (
    <section className='w-layout h-layout bg-slate-200 flex gap-3 flex-wrap justify-center p-4 overflow-y-scroll'>
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </section>
  )
}
