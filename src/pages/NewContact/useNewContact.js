import { useRef } from 'react'

import ContactsService from '../../services/ContactsService'
import { toast } from '../../utils/toast'

export function useNewContact() {
	const contactFormRef = useRef(null)
	async function handleSubmit(contact) {
		try {
			await ContactsService.createContacts(contact)
			contactFormRef.current.resetFields()

			toast({
				type: 'success',
				text: 'Contato cadastrado com sucesso',
			})
		} catch (error) {
			// alert('Erro ao cadastrar contato')
			toast({
				type: 'error',
				text: 'Erro ao cadastrar contato',
			})
		}
	}

	return { contactFormRef, handleSubmit }
}
