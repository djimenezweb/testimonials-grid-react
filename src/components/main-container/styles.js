import styled from 'styled-components';

const StyledMainContainer = styled.div`
	max-width: 1110px;
	margin: 2rem auto;
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);

		& > :nth-child(1) {
			grid-column: span 2;
		}

		& > :nth-child(3) {
			grid-row: 2;
			grid-column: 1;
		}

		& > :nth-child(4) {
			grid-row: 2;
			grid-column: 2 / 4;
		}

		& > :nth-child(5) {
			grid-column: 4;
			grid-row: span 2;
		}
	}

	& > :nth-child(1) {
		background-image: url('/assets/images/bg-pattern-quotation.svg');
		background-repeat: no-repeat;
		background-position: 80% 0;
	}
`;

export { StyledMainContainer };
