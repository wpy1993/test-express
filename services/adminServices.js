import Admin from "../models/admin.js";

export const addAdmin = async (adminObj) => {
  // 判断值是否符合要求
  // 判断账号是否存在
  // 执行写入操作

  const ins = await Admin.create(adminObj);
  return ins.toJSON();
};

export const deleteAdmin = async (adminId) => {
  // 判断值是否符合要求
  // 保证至少一个管理员或者保证超管不能删除
  // 执行删除操作

  // 方式1
  // const ins = await Admin.findOne({ where: { loginId: adminId } });
  // ins.destroy();

  // 方式2
  await Admin.destroy({ where: { loginId: adminId } });
  // console.log("ins is", ins);
};

export const updateAdmin = async (adminObj) => {
  // 方法1
  const ins = await Admin.findByPk(3);
  ins.name = adminObj.name;
  ins.loginPwd = adminObj.loginPwd;
  ins.save();

  // 方法2
  // const ins = await Admin.update(adminObj, {
  //   where: { loginId: adminObj.loginId },
  // });
  console.log("success", ins);
};

export const getAdmin = async (adminId) => {
  const ins = await Admin.findOne({ where: { loginId: adminId } });
  console.log("success", ins.toJSON());
  // return ins.toJSON();
};
