import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const Text = styled.div`
  align-items: flex-end;
  color: grey;
  display: inline-flex;
  flex: 1;
  margin-right: 1rem;
  span {
    flex: 1 0 auto;
    margin-right: 1rem;
  }
  &:after {
    border-bottom: 1px dashed lightgray;
    bottom: 2px;
    content: "";
    height: 1px;
    position: relative;
    width: 100%;
  }
`;

export const Value = styled.div`
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
