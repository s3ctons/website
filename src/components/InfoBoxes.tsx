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
            buttonText="Get Audit"
          />
          <InfoBox
            heading="For Auditors"
            text="If you are a super-duper auditor, welcome. Show your skills and earn
            some moneys."
            buttonText="Become Auditor"
          />
          <InfoBox
            heading="For Judges"
            text="If you are super-extra-duper and experienced auditor, become a
            judge."
            buttonText="Become Judge"
          />
        </div>
      </div>
    </section>
  )
}
