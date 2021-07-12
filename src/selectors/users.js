import { createSelector } from 'reselect';

const userSelector = state => state.user

export const getUserDetails = createSelector(
    userSelector,
    user => user
)