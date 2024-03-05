const connection = require("../config/database");
const {
  getAllUser,
  getUserId,
  deleteUser,
  editUser,
  addUser,
} = require("../services/CRUDService");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getHomeList = async (req, res) => {
  let results = await getAllUser();
  return res.render("usermanagement.ejs", { listUsers: results });
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;
  let results = await addUser(email, name, city);
  console.log(">>> check result create", results);
  res.send(`
    <script>
      alert("Create success");
      setTimeout(() => {
        window.location.href = '/usermanagement';
      }, 1000);
    </script>
  `);
};

const getUpdatePage = async (req, res) => {
  let userId = req.params.id;
  let user = await getUserId(userId);
  res.render("edit.ejs", { UserInfo: user });
};

const getDeletePage = async (req, res) => {
  let userId = req.params.id;
  let userDelete = await deleteUser(userId);
  console.log("Check delete user", userDelete);
  res.send(`
  <script>
    alert("Delete success");
    setTimeout(() => {
      window.location.href = '/usermanagement';
    }, 1000);
  </script>
`);
};

const postEditUser = async (req, res) => {
  let userId = req.params.id;
  let emailUser = req.body.email;
  let userEdit = await editUser(emailUser, userId);
  console.log(">>> check edit user", userEdit);
  res.send(`
  <script>
    alert("Edit success");
    setTimeout(() => {
      window.location.href = '/usermanagement';
    }, 1000);
  </script>
`);
};

module.exports = {
  getHomePage,
  postCreateUser,
  getHomeList,
  getUpdatePage,
  getDeletePage,
  postEditUser,
};
