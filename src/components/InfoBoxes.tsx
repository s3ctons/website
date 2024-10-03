import Link from "next/link"
import { InfoBox } from "@/components/InfoBox"

export const InfoBoxes = () => {
  return (
    <section>
      <div className="mx-auto lg:container">
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
          <InfoBox
            heading="For Protocols"
            text="Trust your protocol safety to super-duper ton auditors. And pay them
            properly."
            button={
              <Link
                className="inline-block grow-0 self-start bg-primary-900 px-4 py-2 font-semibold hover:bg-primary-800"
                href="/application-protocol"
              >
                Get Audit
              </Link>
            }
          />
          <InfoBox
            heading="For Auditors"
            text="If you are a super-duper auditor, welcome. Show your skills and earn
            some moneys."
            button={
              <Link
                className="inline-block grow-0 self-start bg-primary-900 px-4 py-2 font-semibold hover:bg-primary-800"
                href="#"
              >
                Become Auditor
              </Link>
            }
          />
          <InfoBox
            heading="For Judges"
            text="If you are super-extra-duper and experienced auditor, become a
            judge."
            button={
              <Link
                className="inline-block grow-0 self-start bg-primary-900 px-4 py-2 font-semibold hover:bg-primary-800"
                href="/application-judge"
              >
                Become Judge
              </Link>
            }
          />
        </div>
      </div>
    </section>
  )
}
