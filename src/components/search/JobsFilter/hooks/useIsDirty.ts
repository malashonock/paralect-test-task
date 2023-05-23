import { useEffect, useState } from 'react';

import { JobFiltersState } from 'store/types';

export const useIsDirty = (currentState: JobFiltersState, submittedState: JobFiltersState): boolean => {
  const [isDirty, setIsDirty] = useState(false);
  
  useEffect(() => {
    if (
      submittedState.industryId !== currentState.industryId 
      || submittedState.salaryFrom !== currentState.salaryFrom 
      || submittedState.salaryTo !== currentState.salaryTo 
    ) {
      if (!isDirty) setIsDirty(true);
    } else {
      if (isDirty) setIsDirty(false);
    }
  }, [
    currentState.industryId,
    currentState.salaryFrom,
    currentState.salaryTo,
    submittedState.industryId,
    submittedState.salaryFrom,
    submittedState.salaryTo,
  ]);

  return isDirty;
}