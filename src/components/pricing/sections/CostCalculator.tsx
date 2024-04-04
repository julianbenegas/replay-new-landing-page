'use client'
import { useState } from 'react'
import { TableCell, TableRow, TableBody, Table } from '~/components/ui/table'
import { CalendarDaysIcon, CreditCardIcon, UserCircleIcon } from '@heroicons/react/20/solid'


const cypressFields = [
  { label: "Specs in the suite", value: 20 },
  { label: "Tests per spec", value: 5 },
  { label: "Number of developers", value: 10 },
  { label: "Pushes per day", value: 10 },
  { label: "Retry limit", value: 3 },
]

const replayFields = [
  { label: "Flaky tests in the suite", value: 10 },
  { label: "Failing tests in the suite", value: 5 },
  { label: "Uploaded recordings", value: 420 },
  { label: "Processed recordings", value: 120 },
]

const Field = ({
  className,
  label,
  value
}: {
  className?: string
  label: string
  value: string
}) => {
  const [editMode, setEditMode] = useState(false)

  return (
    <div className="mt-4 flex flex w-full gap-x-4 px-6">
      <dt className={`flex ${className}`}>
        <span className="sr-only">Status</span>
        {label != '' && <CreditCardIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />}
      </dt>
      <dd className="flex-grow text-sm leading-6 text-gray-500">{label}</dd>
      <dd className="text-sm leading-6 text-gray-500">
        {editMode ? (
          <input
            type="text"
            name="replayCost"
            className="rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={value}
          />
        ) : (
          value
        )}
      </dd>
    </div>
  )
}

function Panel({ title, subtitle, fields, summary, className }: {
  title: string
  subtitle: string
  fields: { label: string; value: string }[]
  summary: React.ReactNode,
  className?: string
}) {
  return <div className={`max-w-lg lg:row-end-1 ${className}`}>
    <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5 ">
      <dl className="flex flex-wrap">
        <div className="flex-auto border-b border-gray-900/5 pb-3 pl-6 pt-6">
          <dt className="text-lg font-semibold leading-6 text-gray-900">{title}</dt>
          <dt className="text-sm font leading-6 text-gray-900">{subtitle}</dt>
        </div>
        {fields.map(({ label, value }) => (
          <Field key={label} label={label} value={value} />
        ))}
      </dl>
      <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
        {summary}
      </div>
    </div>
  </div>
}


export function CostCalculator() {
  return (
    <div className="mx-auto mt-10 max-w-4xl">

      <div>
        <div className="mx-auto mt-32 max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Cost Model</h2>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            How Replay compares with other tools.
          </h2>
          <p className="mx-auto mb-12 mt-3 max-w-2xl text-base leading-6 text-gray-600">
            Most testing tools charge per test run which discourages you from growing the test suite
            and scales with the cost of CI. With Replay, you only pay for the recordings you need to
            debug failures after the fact.
          </p>
        </div>

        <div className="row-gap-8 grid max-w-4xl grid-cols-2 gap-x-8">
          <Panel
            title="Cypress"
            subtitle="Cypress and other tools charge by test run."
            className='lg:col-start-1'
            fields={cypressFields}
            summary={<>
              <div className="text-sm font-medium leading-6 text-gray-900">
                1,560,000 test runs per month
              </div>
              <div className="text-sm font-semibold leading-6 text-gray-900">
                $9,360 per month on the Business plan!!
              </div>
            </>}
          />

          <Panel
            title="Replay"
            subtitle="Replay charges by recordings uploaded and processed."
            className='lg:col-start-2'
            fields={replayFields}
            summary={<>
              <div className="text-sm font-medium leading-6 text-gray-900">
                420 uploaded. 120 processed.
              </div>
              <div className="text-sm font-semibold leading-6 text-gray-900">
                $9,360 per month on the Business plan :)
              </div>
            </>}
          />


        </div>
      </div>
    </div>
  )
}
