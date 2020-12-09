import { createSelector } from 'reselect'
import { RootState } from 'common/redux/types'

import {
  EvaluateClaimState
} from './types'

export const selectEvaluateClaim = (
  state: RootState,
): EvaluateClaimState => state.evaluateClaim

export const selectIsLoading = createSelector(
  selectEvaluateClaim,
  (evaluateClaim) => evaluateClaim.isLoading
)

export const selectClaim = createSelector(
  selectEvaluateClaim,
  (evaluateClaim) => evaluateClaim.claim
)

export const selectTemplateForms = createSelector(
  selectEvaluateClaim,
  (evaluateClaim) => evaluateClaim.claimTemplate
)