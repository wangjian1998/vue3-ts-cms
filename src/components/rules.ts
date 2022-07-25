const dic = {
  required: {
    required: true,
    message: '该输入项为必填项!',
    trigger: 'blur'
  },
  name: {
    pattern: /^[a-z0-9]{5,10}$/,
    trigger: 'blur',
    message: '用户名长度为5~10个字符'
  },
  email: {
    type: 'email',
    message: '请输入正确的邮箱地址',
    trigger: 'blur'
  },
  phone: {
    pattern: /^1[34578]\d{9}$/,
    message: '请输入正确的手机号码',
    trigger: 'blur'
  },
  idCard: {
    pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
    message: '请输入15或者18位身份证号码',
    trigger: 'blur'
  },
  num: {
    pattern: /^[1-9]\d*$/,
    message: '请输入非0的整数',
    trigger: 'blur'
  },
  ip: {
    pattern:
      /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
    message: '请输入正确的ip地址',
    trigger: 'blur'
  },
  mac: {
    pattern: /^[A-F0-9]{2}(-[A-F0-9]{2}){5}$|^[A-F0-9]{2}(:[A-F0-9]{2}){5}$/,
    message: '请输入正确的mac地址',
    trigger: 'blur'
  },
  pwd: {
    pattern: /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{8,18}$/,
    message: '请输入8-18位，大写字母、小写字母、数字、特殊字符中的2种',
    trigger: 'blur'
  },
  password: {
    pattern: /^[a-z0-9]{3,}$/,
    trigger: 'blur',
    message: '请输入3位以上密码'
  }
}
export function formRule(rule: any, required: boolean) {
  const ruleFormArr = []
  if (required) ruleFormArr.push(dic.required)
  ruleFormArr.push(dic[rule])
  return ruleFormArr
}

// export default formRule
// const dic = {
//       required: {
//         required: true,
//         message: item.msg ?? '该输入项为必填项!',
//         trigger: 'blur'
//       },
//       email: {
//         type: 'email',
//         message: item.msg ?? '请输入正确的邮箱地址',
//         trigger: 'blur'
//       },
//       phone: {
//         pattern: /^1[34578]\d{9}$/,
//         message: item.msg ?? '请输入正确的手机号码',
//         trigger: 'blur'
//       },
//       idCard: {
//         pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
//         message: item.msg ?? '请输入15或者18位身份证号码',
//         trigger: 'blur'
//       },
//       num: {
//         pattern: /^[1-9]\d*$/,
//         message: item.msg ?? '请输入非0的整数',
//         trigger: 'blur'
//       },
//       ip: {
//         pattern:
//           /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
//         message: '请输入正确的ip地址',
//         trigger: 'blur'
//       },
//       mac: {
//         pattern:
//           /^[A-F0-9]{2}(-[A-F0-9]{2}){5}$|^[A-F0-9]{2}(:[A-F0-9]{2}){5}$/,
//         message: '请输入正确的mac地址',
//         trigger: 'blur'
//       },
//       pwd: {
//         pattern: /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{8,18}$/,
//         message: '请输入8-18位，大写字母、小写字母、数字、特殊字符中的2种',
//         trigger: 'blur'
//       }
//     }
// import { createApp } from 'vue'
// import App from '../App.vue'
// interface IRuleType {
//   install: any
// }

// // interface IArr {
// //   required?: boolean
// //   message?: string
// //   trigger?: string
// //   pattern?: string
// //   type?: string
// //   min?: number
// //   max?: number
// // }
// const Validation: IRuleType = {
//   install: () => {
//     return []
//   }
// }
// Validation.install = function (Vue: any) {
//   /**
//    * 参数 item校验规则对象{rule:'required|phone',msg:'自定义提示信息'}
//    * rule   校验规划字典key,多个以|分隔
//    * maxLength  字符串的最大长度
//    * min 和 max 必须同时给 min < max
//    * regexp 自定义正则
//    * msg:不传取设置message,若传显示自定义的提示信息
//    * */

//   const app = createApp(App)
//   // 挂载到原型用config.globalProperties
//   app.config.globalProperties.$ctjRules = function (item: any) {
//     const dic = {
//       required: {
//         required: true,
//         message: item.msg ?? '该输入项为必填项!',
//         trigger: 'blur'
//       },
//       email: {
//         type: 'email',
//         message: item.msg ?? '请输入正确的邮箱地址',
//         trigger: 'blur'
//       },
//       phone: {
//         pattern: /^1[34578]\d{9}$/,
//         message: item.msg ?? '请输入正确的手机号码',
//         trigger: 'blur'
//       },
//       idCard: {
//         pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
//         message: item.msg ?? '请输入15或者18位身份证号码',
//         trigger: 'blur'
//       },
//       num: {
//         pattern: /^[1-9]\d*$/,
//         message: item.msg ?? '请输入非0的整数',
//         trigger: 'blur'
//       },
//       ip: {
//         pattern:
//           /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
//         message: '请输入正确的ip地址',
//         trigger: 'blur'
//       },
//       mac: {
//         pattern:
//           /^[A-F0-9]{2}(-[A-F0-9]{2}){5}$|^[A-F0-9]{2}(:[A-F0-9]{2}){5}$/,
//         message: '请输入正确的mac地址',
//         trigger: 'blur'
//       },
//       pwd: {
//         pattern: /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{8,18}$/,
//         message: '请输入8-18位，大写字母、小写字母、数字、特殊字符中的2种',
//         trigger: 'blur'
//       }
//     }

//     const rules = []
//     if (item.rule) {
//       const arr = item.rule.split('|')
//       arr.map((x: any) => {
//         rules.push(dic[x])
//       })
//     }

//     if (item.maxLength) {
//       rules.push({
//         min: 1,
//         max: item.maxLength,
//         message: '最多输入' + item.maxLength + '个字符!',
//         trigger: 'blur'
//       })
//     }
//     if (item.min && item.max) {
//       rules.push({
//         min: item.min,
//         max: item.max,
//         message: '字符长度在' + item.min + '至' + item.max + '之间!',
//         trigger: 'blur'
//       })
//     }
//     if (item.regexp) {
//       rules.push({ pattern: item.regexp, message: item.msg, trigger: 'blur' })
//     }
//     return rules
//   }
// }

// // module.exports = Validation
// export default Validation
