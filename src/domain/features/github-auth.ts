import { AcessToken } from '@/domain/models'
import { AuthenticationError } from '@/domain/erros'

export interface GithubAuth {
  auth: (params: GithubAuth.Params) => GithubAuth.Result
}

namespace GithubAuth {
  export type Params = {
    token: string
  }
  export type Result = AcessToken | AuthenticationError
}
