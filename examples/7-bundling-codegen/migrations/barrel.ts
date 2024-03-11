// The content in this file is autogenerated by eslint. So any IDE with an eslint extension will automatically
// sync it, or a lint task such as `yarn lint --fix`.
// Ideally there should be a CI job that runs `yarn lint` - and will fail if it ever does get out of date.
// See https://npmjs.com/package/eslint-plugin-codegen for more details.

// codegen:start {preset: barrel, include: './*.ts', import: star, export: {name: migrations, keys: path}}
import * as _20201209T192431UsersTable from './2020.12.09T19.24.31.users-table'
import * as _20201209T192509RolesTable from './2020.12.09T19.25.09.roles-table'

export const migrations = {
 "./2020.12.09T19.24.31.users-table": _20201209T192431UsersTable,
 "./2020.12.09T19.25.09.roles-table": _20201209T192509RolesTable
}
// codegen:end