import styled, { css } from 'styled-components'
export const Button = styled.button`
	height: 5.2rem;
	border: none;
	padding: 0 1.6rem;
	background-color: ${({ theme }) => theme.colors.primary.main};
	font-size: 1.6rem;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
	font-weight: bold;
	color: #fff;
	border-radius: 4px;
	transition: background-color 0.2s ease-in;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary.light};
	}

	&:active {
		background-color: ${({ theme }) => theme.colors.primary.dark};
	}

	&[disabled] {
		background-color: ${({ theme }) => theme.colors.gray[100]};
		cursor: default;
	}

	${({ theme, danger }) =>
		danger &&
		css`
			background-color: ${theme.colors.danger.main};

			&:hover {
				background-color: ${theme.colors.danger.light};
			}

			&:active {
				background-color: ${theme.colors.danger.dark};
			}
		`}
`
