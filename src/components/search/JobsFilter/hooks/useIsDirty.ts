import { useEffect, useState } from 'react';

import { JobFiltersState } from 'reducers/search';

export const useIsDirty = (currentState: JobFiltersState, submittedState: JobFiltersState): boolean => {
  const [isDirty, setIsDirty] = useState(false);
  
  useEffect(() => {
    if (
      submittedState.industryId !== currentState.industryId 
      || submittedState.salaryRange.from !== currentState.salaryRange.from 
      || submittedState.salaryRange.to !== currentState.salaryRange.to 
    ) {
      if (!isDirty) setIsDirty(true);
    } else {
      if (isDirty) setIsDirty(false);
    }
  }, [
    currentState.industryId,
    currentState.salaryRange.from,
    currentState.salaryRange.to,
    submittedState.industryId,
    submittedState.salaryRange.from,
    submittedState.salaryRange.to,
  ]);

  return isDirty;
}