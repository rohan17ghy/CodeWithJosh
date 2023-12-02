import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people : {id: number, name: string}[] = [
    {
        id: 1,
        name: 'All Courses',
    },
    {
        id: 2,
        name: 'Front-end Development'
    },
    {
        id: 3,
        name: 'Back-end Development'
    },
    {
        id: 4,
        name: 'Mobile Development'
    },
    {
        id: 5,
        name: 'Programming Languages'
    },
    {
        id: 6,
        name: 'Software Engineering Essentials'
    }
]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

function Select() : JSX.Element {
  const [current, setCurrent] = useState(people[3])

  return (
    <Listbox onChange={setCurrent} value={current}>
      {({ open }) => (        
        <div className="relative mt-2">
        <Listbox.Button className="relative block cursor-default rounded-md bg-custom-bg text-base text-gray-200 py-1.5 pl-3 pr-10 text-left shadow-sm border-custom-border border placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-700  m:text-sm sm:leading-6 sm:text-sm">
            <span className="flex items-center">                
            <span className="ml-3 block truncate">{current ? current.name : ""}</span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
            </span>
        </Listbox.Button>

        <Transition            
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            show={open}
        >
            <Listbox.Options className="absolute z-10 mt-1 max-h-56 overflow-auto rounded-md bg-custom-bg border-custom-border border py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {people.map((person) => (
                <Listbox.Option
                className={({ active }) =>
                    classNames(
                    active ? 'bg-violet-600 text-white' : 'text-gray-400',
                    'relative text-base cursor-default select-none py-2 pl-3 pr-9'
                    )
                }
                key={person.id}                
                value={person}
                >
                {({ selected, active }) => (
                    <>
                        <div className="flex items-center">                          
                            <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                            {person.name}
                            </span>
                        </div>
                        {selected ? (
                            <span
                            className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                            >
                            <CheckIcon aria-hidden="true" className="h-5 w-5" />
                            </span>
                        ) : null}
                    </>
                )}
                </Listbox.Option>
            ))}
            </Listbox.Options>
        </Transition>
        </div>
      )}
    </Listbox>
  )
}

export { Select }