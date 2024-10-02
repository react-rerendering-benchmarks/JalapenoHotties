import { memo } from "react";
import AccountInfo from '../components/Account';
import './App.css';
export const Account = memo(function Account() {
  /* get the user_id of the current logged in user from the 
     query parameter. 
  */

  const queryParams = new URLSearchParams(window.location.search);
  const user_id = queryParams.get("id");
  console.log(user_id);
  return <dev>
        <style>{'body { background-color: lightgrey; }'}</style>
        <AccountInfo user={user_id} />  
        </dev>;
});