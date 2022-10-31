import styled from "styled-components";

export const Container = styled.div`
	padding: 0 15px;
	height: 100%;
	flex: 0 0 320px;
	opacity: ${(props) => (props.done ? 0.6 : 1)};

	& + div {
		border-left: 1px solid rgba(255, 255, 255, 0.3);
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 42px;

		h2 {
			font-weight: 500;
			font-size: 16px;
			padding: 0 10px;
		}

		button {
			height: 42px;
			width: 42px;
			border-radius: 25px;
			background: #d65a31;
			border: 0;
			cursor: pointer;
		}
	}

	ul {
		margin-top: 30px;
	}
`;
