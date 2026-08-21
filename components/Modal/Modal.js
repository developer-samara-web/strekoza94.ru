'use client'

import '@/components/Modal/Modal.css';

import { useEffect } from 'react'

export default function ServiceModal({ isOpen, service, onClose }) {
	useEffect(() => {
		if (!isOpen) return

		const handleEscape = (event) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		document.addEventListener('keydown', handleEscape)
		document.body.style.overflow = 'hidden'

		return () => {
			document.removeEventListener('keydown', handleEscape)
			document.body.style.overflow = ''
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	return (
		<section className="modal">
			<button type="button" aria-label="Закрыть" onClick={onClose} className="modal__overflow" />
			<div className="modal__inner">
				<button type="button" onClick={onClose} aria-label="Закрыть" className="modal__close">
					×
				</button>

				<h2 className="modal__title">
					Забронировать
				</h2>

				<p className="modal__description">
					Оставьте свои данные, и мы свяжемся с вами
				</p>

				{service && (
					<div className="modal__services">
						<p className="modal__service-title">
							Выбранная услуга
						</p>

						<p className="modal__service-name">
							{service}
						</p>
					</div>
				)}

				<form className="modal__form">
					<div>
						<label htmlFor="name" className="modal__label">
							Имя
						</label>
						<input id="name" name="name" type="text" placeholder="Ваше имя" required className="modal__input" />
					</div>
					<div>
						<label htmlFor="phone" className="modal__label">
							Телефон
						</label>
						<input id="phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__" required className="modal__input" />
					</div>
					<button type="submit" className="button button-md button-primary w-full">
						Оставить заявку
					</button>
				</form>

				<p className="modal__info">
					Нажимая кнопку, вы соглашаетесь на обработку нами персональных данных
				</p>
			</div>
		</section>
	)
}