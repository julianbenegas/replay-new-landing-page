import Image from 'next/image'

import { BaseHubButton } from '@/components/Button'
import { Container } from '@/components/Container'
import logoReact from '@/images/logos/react.svg'
import logoGlide from '@/images/logos/glide.svg'
import logoApolloGraphql from '@/images/logos/apollo-graphql.svg'
import logoCodeSandbox from '@/images/logos/code-sandbox.svg'
import logoMetabase from '@/images/logos/metabase.svg'
import logoVercel from '@/images/logos/vercel.svg'
import logoWeightsAndBiases from '@/images/logos/weights-and-biases.svg'
import { LandingPageFragment } from '@/lib/basehub-queries'
import { RichText } from 'basehub/react-rich-text'
import { Texture } from '@/components/Texture'
import { SwirlyDoodle } from '../SquigglyTitle'
/*transform: rotate(-7.5deg);
        transform-origin: bottom right;*/
export function Hero({ hero }: LandingPageFragment) {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        {/* Move fast and don’t <span className='inline-block' style={{
          whiteSpace: 'nowrap',
          transform: "rotate(-7.5deg)",
          transformOrigin: "bottom right"

        }}>break</span> things. */}
        Move fast and{' '}
        <span className="relative whitespace-nowrap">
          <SwirlyDoodle className="absolute left-0 top-3/4 h-[1/2em] w-full fill-red-400" />
          <span className="relative">don't</span>
        </span>{' '}
        break things.
      </h1>
      <div className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        <RichText>{hero.subtitle.json.content}</RichText>
      </div>

      <div className="mt-10 flex justify-center gap-x-6">
        <BaseHubButton {...hero.getStartedLink} />
        <BaseHubButton {...hero.contactUsLink} />
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          {hero.logosTitle}
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 saturate-0 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'WeightsBiases', logo: logoWeightsAndBiases },
              { name: 'Vercel', logo: logoVercel },
              { name: 'Metabase', logo: logoMetabase },
              { name: 'Glide', logo: logoGlide },
            ],
            [
              { name: 'Code Sandbox', logo: logoCodeSandbox },
              { name: 'React', logo: logoReact },
              { name: 'Apollo GraphQL', logo: logoApolloGraphql },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 ">
        <Texture />
      </div>
    </Container>
  )
}
