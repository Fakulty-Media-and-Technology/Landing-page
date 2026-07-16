'use client'

import Wrapper from '@/components/Wrapper'
import { manrope_500, manrope_600, montserrat_700, montserrat_800 } from '@/configs/fonts'
import Link from 'next/link'

const waitlistLinks = [
  {
    title: 'Brand / Events',
    description: 'Broadcast live events, shows, and branded content on Reeplay.',
    href: 'https://airtable.com/apprDXoDC3xnhHED3/pagkXCmtQOARn03fh/form',
  },
  {
    title: 'Producers',
    description: 'Join the film, documentary, and series waitlist for early access.',
    href: 'https://airtable.com/apprDXoDC3xnhHED3/pagH8Xgy4JbYAPNCl/form',
  },
  {
    title: 'Churches / Faith',
    description: 'Apply for early access to launch your channel on Reeplay.',
    href: 'https://airtable.com/apprDXoDC3xnhHED3/pagtDI0fzHtomhJ1S/form',
  },
]

function Page() {
  return (
    <main className='bg-black mt-2 pb-10 overflow-hidden'>
      <Wrapper>
        <section className='mx-auto mt-8 max-w-[960px] rounded-[28px] border border-white/10 bg-white/5 px-5 py-8 sm:px-8 sm:py-10'>
          <p className={`${manrope_600.className} text-sm uppercase tracking-[0.24em] text-[#F69392]`}>
            Waitlist
          </p>
          <h1 className={`${montserrat_800.className} mt-4 text-3xl leading-tight text-gray_white sm:text-4xl lg:text-[52px]`}>
            Join the right Reeplay waitlist
          </h1>
          <p className={`${manrope_500.className} mt-4 max-w-[720px] text-sm leading-7 text-white_2 sm:text-base`}>
            Pick the category that fits your use case. Each link opens the correct signup form directly, without the embedded modal that caused issues on the old page.
          </p>

          <div className='mt-8 grid gap-4 md:grid-cols-3'>
            {waitlistLinks.map((item) => (
              <article key={item.title} className='rounded-[22px] border border-white/10 bg-black/40 p-5'>
                <h2 className={`${montserrat_700.className} text-lg text-gray_white`}>
                  {item.title}
                </h2>
                <p className={`${manrope_500.className} mt-3 text-sm leading-6 text-white_2`}>
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  target='_blank'
                  rel='noreferrer'
                  className={`${manrope_600.className} mt-5 inline-flex items-center rounded-full border border-[#F69392] px-5 py-3 text-sm font-semibold text-[#F69392] transition-colors hover:bg-[#F69392] hover:text-black`}
                >
                  Open form
                </Link>
              </article>
            ))}
          </div>
        </section>
      </Wrapper>
    </main>
  )
}

export default Page