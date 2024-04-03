import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { ButtonLink } from '~/components/primitives/cta'
import { NavLink } from '~/components/primitives/nav-link'
import { useAppStore } from '~/context/use-app-store'
import { useToggleState } from '~/hooks/use-toggle-state'
import { SITEMAP } from '~/lib/sitemap'
import { getImageSizes } from '~/lib/utils/image'

import s from './header.module.scss'
import { MobileMenu } from './mobile-menu'
import {
  NavigationContent,
  NavigationItem,
  NavigationList,
  NavigationTrigger,
  NavigationWrapper
} from './navigation'

export const links = [
  SITEMAP.solutions,
  SITEMAP.devTools,
  SITEMAP.docs,
  SITEMAP.company,
  SITEMAP.pricing
]

export const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const { navigationSitemapShowing } = useAppStore()
  const toggle = useToggleState()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()

    document.addEventListener('scroll', handleScroll)

    return () => document.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <>
      <header
        className={clsx(s.header, {
          [s.scrolled as string]: scrolled,
          [s.navigationSitemapShowing as string]: navigationSitemapShowing,
          [s.menuIsOpen as string]: toggle.isOn
        })}
      >
        <NavigationWrapper>
          <NavLink
            passHref
            href={SITEMAP.home.href || '/'}
            aria-label={`Go to ${SITEMAP.home.label}`}
            onClick={toggle.handleOff}
            className={s.logo}
          >
            <Image
              fill
              src="/images/logo.png"
              alt="Replay's logo"
              quality={100}
              priority
              sizes={getImageSizes(2, 2, 2)}
            />
          </NavLink>

          <NavigationList quantity={links.length}>
            {links.map((link, index) => (
              <NavigationItem
                key={link.label}
                className={s[`headerLink-${index + 1}`]}
              >
                {link.dropdown ? (
                  <>
                    <NavigationTrigger>{link.label}</NavigationTrigger>
                    <NavigationContent
                      mainContent={link.dropdown.mainContent}
                      sidebar={link.dropdown.sidebar}
                      index={index + 1}
                    />
                  </>
                ) : (
                  <NavLink
                    style={{
                      color: router.pathname === link.href ? '#fff' : 'inherit'
                    }}
                    href={link.href || '/'}
                    aria-label={link.label}
                  >
                    {link.label}
                  </NavLink>
                )}
              </NavigationItem>
            ))}
          </NavigationList>

          <div className={s.rightSideCtasWrapper}>
            <MobileMenu burgerClassName={s['burgerButton']} {...toggle} />

            <div className={s['ctas']}>
              <ButtonLink
                size="big"
                mode="secondary"
                href={SITEMAP.login.href || '/'}
                aria-label={SITEMAP.login.label}
              >
                {SITEMAP.login.label}
              </ButtonLink>
              <ButtonLink
                size="big"
                mode="primary"
                href={SITEMAP.getStarted.href || '/'}
                aria-label={SITEMAP.getStarted.label}
              >
                {SITEMAP.getStarted.label}
              </ButtonLink>
            </div>
          </div>
        </NavigationWrapper>
      </header>
    </>
  )
}
