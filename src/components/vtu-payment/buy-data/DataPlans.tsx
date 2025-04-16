import { InternetDataPlanProps, InternetDataProviderProps } from '@/types/base'
import Image from 'next/image'

interface DataPlansProps {
    setSelectedPlan: React.Dispatch<React.SetStateAction<InternetDataPlanProps | null>>
    setSelectedProvider: React.Dispatch<React.SetStateAction<InternetDataProviderProps | null>>
    plans: InternetDataPlanProps[] | null
    selectedProviderLogo: string | null
}

const DataPlans = ({plans, setSelectedPlan, selectedProviderLogo, setSelectedProvider}: DataPlansProps) => {
  return (
    <>
        <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
                <span className="relative size-16 mb-2 rounded-lg border">
                    <Image
                        src={selectedProviderLogo !== null ? selectedProviderLogo : '/images/imagePlaceholder.jpeg'}
                        alt="logo"
                        fill
                        className="object-contain rounded-lg"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </span>
                <h2 className='text-xl font-semibold pb-4'>Select Plan</h2>
            </div>
            <button type="button" onClick={() => setSelectedProvider(null)} className="text-sm text-gray-500 underline mt-2">Change Provider</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {plans && plans.length > 0 && plans.map(plan => (
            <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan)}
                className="bg-white border rounded-xl p-4 flex flex-col items-center justify-center gap-2 divide-y shadow-sm hover:shadow-md cursor-pointer transition"
            >
                <span className="w-full text-base text-center font-medium text-gray-700">{plan.name}</span>
                <span className="w-full text-sm text-center font-medium text-gray-700 pt-1">₦{plan.amount}</span>
            </div>
            ))}
        </div>
    </>
  )
}

export default DataPlans