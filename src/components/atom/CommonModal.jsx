import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

const CommonModal = ({ isModalOpen, text, closeModal }) => {

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={isModalOpen}
                    className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                    Open dialog
                </button>
            </div>

            <Transition appear show={isModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-9 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-xl font-medium leading-6 text-gray-900"
                                    >
                                        {text}
                                    </Dialog.Title>
                                    <div className="mt-10">
                                        <div className='grid grid-cols-2 gap-x-14'>
                                            <div onClick={closeModal}>
                                                <ButtonSecondary text="No" />
                                            </div>
                                            <div onClick={closeModal}>
                                                <ButtonPrimary text="Yes" />
                                            </div>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CommonModal;