import { User } from "common/interfaces/User"
import { createContext } from "react"

const user: User = {}

const UserContext = createContext(
  user
)

export default UserContext