'use client'

import { createContext, useCallback, useContext, useState } from 'react'

import Modal from '@/components/Modal/Modal';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedService, setSelectedService] = useState('')

	const openModal = useCallback((service = '') => {
		setSelectedService(service)
		setIsOpen(true)
	}, [])

	const closeModal = useCallback(() => {
		setIsOpen(false)
	}, [])

	return (
		<ModalContext.Provider value={{ openModal, closeModal }}>
			{children}
			<Modal isOpen={isOpen} service={selectedService} onClose={closeModal} />
		</ModalContext.Provider>
	)
}

export function useModal() {
	const context = useContext(ModalContext)

	if (!context) {
		throw new Error('useModal must be used inside ModalProvider')
	}

	return context
}