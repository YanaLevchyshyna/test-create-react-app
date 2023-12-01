import styled from '@emotion/styled';

export const FirstItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const FirstList = styled.ul`
  display: flex;

  li {
    color: ${(props) => props.theme.colors.text};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -6px;
      transform: translateY(-50%);
      height: 16px;
      width: 1px;
      background-color: ${(props) => props.theme.colors.after};
    }
  }
`;

export const SecondList = styled.ul`
  display: flex;

  li {
    color: ${(props) => props.theme.colors.text};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis; /* Додає три крапочки для обрізання тексту */
    }

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -6px;
      transform: translateY(-50%);
      height: 16px;
      width: 1px;
      background-color: ${(props) => props.theme.colors.after};
    }
  }
`;
