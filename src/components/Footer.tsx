import { Twitter } from "@/components/svg/socials/Twitter"
import { Telegram } from "@/components/svg/socials/Telegram"
import { Discord } from "@/components/svg/socials/Discord"
import { GitHub } from "@/components/svg/socials/GitHub"

const socials = [
  { icon: <Twitter />, href: "#" },
  { icon: <Telegram />, href: "#" },
  { icon: <Discord />, href: "#" },
  { icon: <GitHub />, href: "#" },
]

export const Footer = () => (
  <footer className="flex items-center justify-center gap-2 border-t border-t-secondary-600 p-3">
    {socials.map((social) => (
      <a
        href={social.href}
        target="_blank"
        className="text-secondary-300 hover:text-primary-600"
        key={social.href}
      >
        {social.icon}
      </a>
    ))}
  </footer>
)
