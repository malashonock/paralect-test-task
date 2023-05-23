import { useEffect, useState } from 'react';

import { JobFiltersState } from 'store/types';

export const useIsReset = (currentState: JobFiltersState, clearedState: JobFiltersState): boolean => {
  const [isReset, setIsReset] = useState(false);
  
  useEffect(() => {
    if (
      clearedState.industryId !== currentState.industryId 
      || clearedState.salaryFrom !== currentState.salaryFrom 
      || clearedState.salaryTo !== currentState.salaryTo 
    ) {
      if (!isReset) setIsReset(true);
    } else {
      if (isReset) setIsReset(false);
    }
  }, [
    currentState.industryId,
    currentState.salaryFrom,
    currentState.salaryTo,
    clearedState.industryId,
    clearedState.salaryFrom,
    clearedState.salaryTo,
  ]);

  return isReset;
}