import { useEffect, useState } from 'react';

import { JobFiltersState } from 'reducers/search';

export const useIsReset = (currentState: JobFiltersState, initialState: JobFiltersState): boolean => {
  const [isReset, setIsReset] = useState(false);
  
  useEffect(() => {
    if (
      initialState.industryId !== currentState.industryId 
      || initialState.salaryRange.from !== currentState.salaryRange.from 
      || initialState.salaryRange.to !== currentState.salaryRange.to 
    ) {
      if (!isReset) setIsReset(true);
    } else {
      if (isReset) setIsReset(false);
    }
  }, [
    currentState.industryId,
    currentState.salaryRange.from,
    currentState.salaryRange.to,
    initialState.industryId,
    initialState.salaryRange.from,
    initialState.salaryRange.to,
  ]);

  return isReset;
}