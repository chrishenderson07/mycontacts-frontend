import { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { Form, ButtonContainer } from './styles'

import { FormGroup } from '../FormGroup'
import { Input } from '../Input'
import { Select } from '../Select'
import { Button } from '../Button'
import { useContactForm } from './useContactForm'

// eslint-disable-next-line react/display-name, react/prop-types
const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
	const {
		handleSubmit,
		getErrorMessageByFieldName,
		handleNameChange,
		isSubmitting,
		email,
		handleEmailChange,
		phone,
		handlePhoneChange,
		isLoadingCategories,
		categoryId,
		categories,
		isFormValid,
		setCategoryId,
		name,
	} = useContactForm(onSubmit, ref)

	return (
		<Form
			onSubmit={handleSubmit}
			noValidate>
			<FormGroup error={getErrorMessageByFieldName('name')}>
				<Input
					error={getErrorMessageByFieldName('name')}
					placeholder="Nome *"
					value={name}
					onChange={handleNameChange}
					disabled={isSubmitting}
				/>
			</FormGroup>

			<FormGroup error={getErrorMessageByFieldName('email')}>
				<Input
					type="email"
					error={getErrorMessageByFieldName('email')}
					placeholder="E-mail"
					value={email}
					onChange={handleEmailChange}
					disabled={isSubmitting}
				/>
			</FormGroup>

			<FormGroup>
				<Input
					placeholder="Telefone"
					value={phone}
					onChange={handlePhoneChange}
					maxLength={15}
					disabled={isSubmitting}
				/>
			</FormGroup>

			<FormGroup isLoading={isLoadingCategories}>
				<Select
					value={categoryId}
					onChange={(e) => setCategoryId(e.target.value)}
					disabled={isLoadingCategories || isSubmitting}>
					<option value="">Sem categoria</option>

					{categories.map((categoryId) => (
						<option
							key={categoryId.id}
							value={categoryId.id}>
							{categoryId.name}
						</option>
					))}
				</Select>
			</FormGroup>

			<ButtonContainer>
				<Button
					type="submit"
					disabled={!isFormValid}
					isLoading={isSubmitting}>
					{buttonLabel}
				</Button>
			</ButtonContainer>
		</Form>
	)
})

ContactForm.propTypes = {
	buttonLabel: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
}

export default ContactForm
