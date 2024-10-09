import Link from "next/link"
import { InfoBox } from "@/components/InfoBox"

export const InfoBoxes = () => {
  return (
    <section>
      <div className="mx-auto lg:container">
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
          <InfoBox
            heading="For Protocols"
            text="Secure your protocol now"
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
            text="Find vulnerabilities and receive rewards"
            button={
              <Link
                className="inline-block grow-0 self-start bg-primary-900 px-4 py-2 font-semibold hover:bg-primary-800"
                href="/auditor"
              >
                Become Auditor
              </Link>
            }
          />
          <InfoBox
            heading="For Judges"
            text="Judge the audit contests and get paid"
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
