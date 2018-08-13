import { Toast,MessageBox } from 'mint-ui';

export default function ({ store, error,redirect }) {
  if (!store.state.authUser) {

    // MessageBox({
    //   title: '提示',
    //   message: '确定执行此操作?',
    //   showCancelButton: false
    // }).then(action => {
    //   if(action==="confirm"){
    //     redirect("/mint/mint-ui");
    //   }
    // });
    // Toast({
    //   message: '登录过期了',
    //   position: 'bottom',
    //   duration: 5000
    // });
    // redirect("/mint/mint-ui");
  }
}
