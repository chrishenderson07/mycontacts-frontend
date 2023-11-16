import PropTypes from 'prop-types'

import { Container } from './styles'

import { Button } from '../../../../components/Button'

import sad from '../../../../assets/images/icons/sad.svg'

export function ErrorStatus({ onTryAgain }) {
	return (
		<Container>
			<img
				src={sad}
				alt="Sad"
			/>
			<div className="details">
				<strong>Ocorreu um erro ao obter os seus contatos</strong>

				<Button
					type="button"
					onClick={onTryAgain}>
					Tentar novamente
				</Button>
			</div>
		</Container>
	)
}

ErrorStatus.propTypes = {
	onTryAgain: PropTypes.func.isRequired,
}