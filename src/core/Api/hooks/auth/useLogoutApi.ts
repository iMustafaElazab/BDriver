import {useMutation} from '@tanstack/react-query';
import {default as Config} from 'react-native-config';
import type {UseMutationOptions} from '@tanstack/react-query';
import type {LogoutResponse, ServerError} from 'src/core';
import {fakerAuth, queryAuth} from 'src/core';

const useLogoutApi = (
  options?: Omit<UseMutationOptions<LogoutResponse, ServerError>, 'mutationFn'>,
) =>
  useMutation<LogoutResponse, ServerError>({
    mutationFn: () =>
      Config.USE_FAKE_API === 'true' ? fakerAuth.logout() : queryAuth.logout(),
    ...(options ?? {}),
  });

export default useLogoutApi;
