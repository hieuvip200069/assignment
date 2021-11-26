const tableEmployee = document.getElementById("display-Employee");
const listPhongBan = document.getElementById('department-selector');
// const listChucVu = document.getElementById(`category-selector`);



let Phong_ban_List = [{
        PB_ID: 1,
        PB_Name: `Phong Nhan Su`,
    },
    {
        PB_ID: 2,
        PB_Name: `Phong IT`,
    },
    {
        PB_ID: 3,
        PB_Name: `Phong Kinh Doanh`,
    },
    {
        PB_ID: 4,
        PB_Name: `Phong Sale`,
    },
    {
        PB_ID: 5,
        PB_Name: `Phong Marketing`,
    },
    {
        PB_ID: 6,
        PB_Name: `Phong Ke Toan`,
    },
];


let Chuc_Vu_List = [{
        Chuc_vu_Id: 1,
        Chuc_vu_Name: `Truong Phong`,
    },
    {
        Chuc_vu_Id: 2,
        Chuc_vu_Name: `Pho phong`,
    },
    {
        Chuc_vu_Id: 3,
        Chuc_vu_Name: `Quan Ly`,
    },
    {
        Chuc_vu_Id: 4,
        Chuc_vu_Name: `Nhan Vien`,
    },
    {
        Chuc_vu_Id: 5,
        Chuc_vu_Name: `Thu Ky`,
    },
];


let EmployeeList = [{
        MSNV: 1,
        Ten_Nv: 'Trần Đức Hiếu',
        Tuoi: '21',
        Gioi_Tinh: 'Nam',
        img: 'https://toigingiuvedep.vn/wp-content/uploads/2021/07/mau-anh-the-dep-lam-the-can-cuoc.jpg',
        Phong_ban: 1,
        Chuc_vu: 1,
        So_Dien_Thoai: `0912100597`,
        Email: `HieuTD11@gmail.com`
    },
    {
        MSNV: 2,
        Ten_Nv: 'Trần Minh Nhựt',
        Tuoi: '18',
        Gioi_Tinh: 'Nam',
        img: 'https://toigingiuvedep.vn/wp-content/uploads/2021/07/mau-anh-the-nen-trang-dep.jpg',
        Phong_ban: 2,
        Chuc_vu: 2,
        So_Dien_Thoai: `0916253112`,
        Email: `NhutTM@gmail.com`
    },
    {
        MSNV: 3,
        Ten_Nv: 'Trần Duc Hanh',
        Tuoi: '18',
        Gioi_Tinh: 'Nam',
        img: 'https://toigingiuvedep.vn/wp-content/uploads/2021/07/mau-anh-the-nam-sinh-dep.jpg',
        Phong_ban: 3,
        Chuc_vu: 3,
        So_Dien_Thoai: `0916253112`,
        Email: `NhutTM@gmail.com`
    },
    {
        MSNV: 4,
        Ten_Nv: 'Trần Duc Anh Quan',
        Tuoi: '18',
        Gioi_Tinh: 'Nam',
        img: 'https://toigingiuvedep.vn/wp-content/uploads/2021/07/mau-anh-the-dep-voi-ao-so-mi-trang.jpg',
        Phong_ban: 4,
        Chuc_vu: 4,
        So_Dien_Thoai: `0916253112`,
        Email: `NhutTM@gmail.com`
    },
    {
        MSNV: 5,
        Ten_Nv: 'nguyen Thi Tuyet',
        Tuoi: '18',
        Gioi_Tinh: 'Nu',
        img: 'https://toigingiuvedep.vn/wp-content/uploads/2021/07/mau-anh-the-dep-voi-ao-vec.jpg',
        Phong_ban: 5,
        Chuc_vu: 5,
        So_Dien_Thoai: `0916253112`,
        Email: `NhutTM@gmail.com`
    },
    {
        MSNV: 6,
        Ten_Nv: 'Pham Linh Chi',
        Tuoi: '18',
        Gioi_Tinh: 'Nu',
        img: 'https://toigingiuvedep.vn/wp-content/uploads/2021/07/mau-anh-the-cmnd-dep-nhu-hot-girl.jpg',
        Phong_ban: 6,
        Chuc_vu: 5,
        So_Dien_Thoai: `0916253112`,
        Email: `NhutTM@gmail.com`
    },
    {
        MSNV: 7,
        Ten_Nv: 'Ngiem Quoc Anh',
        Tuoi: '18',
        Gioi_Tinh: 'Nam',
        img: 'https://toigingiuvedep.vn/wp-content/uploads/2021/07/mau-anh-the-dep-cua-con-trai.jpg',
        Phong_ban: 6,
        Chuc_vu: 5,
        So_Dien_Thoai: `0916253112`,
        Email: `NhutTM@gmail.com`
    },
    {
        MSNV: 8,
        Ten_Nv: 'Trinh Minh Nhat',
        Tuoi: '18',
        Gioi_Tinh: 'Nam',
        img: 'https://toigingiuvedep.vn/wp-content/uploads/2021/07/anh-the.jpg',
        Phong_ban: 3,
        Chuc_vu: 5,
        So_Dien_Thoai: `0916253112`,
        Email: `NhutTM@gmail.com`
    },
    {
        MSNV: 9,
        Ten_Nv: 'Nguyen Quynh Nga',
        Tuoi: '18',
        Gioi_Tinh: 'Nam',
        img: 'https://toigingiuvedep.vn/wp-content/uploads/2021/07/anh-the-dep-nu.jpg',
        Phong_ban: 4,
        Chuc_vu: 5,
        So_Dien_Thoai: `0916253112`,
        Email: `NhutTM@gmail.com`
    }
];


let lstUser = [{
        userId: 1,
        userName: 'hieuvip200069',
        email: '123@123ab',
        password: '123456',
        role: 1,
    },
    {
        userId: 2,
        userName: 'demo2',
        email: '123@123a',
        password: '123456',
        role: 1,
    },
    {
        userId: 3,
        userName: 'demo3',
        email: '123',
        password: '123456',
        role: 2,
    },
];
// Kiem tra user da dang nhap lan nao hay chua 
function checkUserLogin() {
    let isAdmin = false;
    if (localStorage.getItem('userId') != null) {
        let userId = Number.parseInt(localStorage.getItem('userId'));
        let userName = '';
        lstUser.forEach(user => {
            if (user.userId == userId) {
                userName = user.userName;
                if (user.role == 1) {
                    document.getElementById('btn-Admin').insertAdjacentHTML('beforeend', ` <button class="btn btn-success" data-toggle="modal" data-target="#CreateModel">Create</button>
                    <div class="modal fade employee-modal" id="CreateModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog " role="document">
                            <div class="modal-content ">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Tạo Nhân Viên Mới</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                                </div>
                                <div class="modal-body">
                                    <div class="container border modal-content">
                                        <form action="" class="row">
                                            <form action="addNew" class="row">
                                                <div class="col-6 form-group">
                                                    <!-- <label for="MSNV">MS Nhân viên:</label><br>
                                        <input type="text" id="MSNhanvien" name="MSNV"><br> -->
                                                    <label for="Ten_Nv">Tên Nhân viên:</label><br>
                                                    <input type="text" id="Tennhanvien" name="Ten_Nv"><br>
                                                    <label for="Tuoi">Tuoi:</label><br>
                                                    <input type="text" id="Tuoi" name="Tuoi"><br>
                                                    <label for="Gioi_Tinh">Giới tính:</label><br>
                                                    <input type="text" id="Gioitinh" name="Gioi_Tinh"><br>
                                                    <label for=" img">Ảnh (URL):</label><br>
                                                    <input type="text" id="Anh" name=" img"><br>
                                                </div>
                                                <div class="col-6 form-group">
                                                    <label for="Phong_ban">Phòng Ban:</label><br>
                                                    <input type="text" id="Phongban" name="Phong_ban"><br>
                                                    <label for="Chuc_vu">Chức vụ:</label><br>
                                                    <input type="text" id="Chucvu" name="Chuc_vu"><br>
                                                    <label for="So_Dien_Thoai">Sđt:</label><br>
                                                    <input type="text" id="Sdt" name="So_Dien_Thoai"><br>
                                                    <label for="Email">Email:</label><br>
                                                    <input type="text" id="Email" name="Email"><br><br>
                                                </div>
                                                <div class="form-group">
                                                    <input type="button" class="btn btn-success" value="Create" onclick="createEmployee()">
                                                </div>
                                            </form>

                                        </form>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);
                    updateTableAdmin();
                    isAdmin = true;
                }

            }
        });

        if (userName != '') {
            User(userName);


        }
    }
    if (!isAdmin) {
        updateTable();
    }
}

// cap nhat hoac tao moi localStorage User 
function UpdateLogin() {
    var lstUserJSON = JSON.parse(localStorage.getItem('UserList'));
    if (lstUserJSON == null) {
        localStorage.setItem('UserList', JSON.stringify(lstUser));
    }
}


// cap nhat hoac tao moi localStorage Employee 
function UpdateList() {
    var EmployeeListJSON = JSON.parse(localStorage.getItem('EmployeeList'));
    if (EmployeeListJSON == null) {
        localStorage.setItem('EmployeeList', JSON.stringify(EmployeeList));
    }
    EmployeeList = JSON.parse(localStorage.getItem('EmployeeList'));
}
// Cap Nhat List trong localStorage
function updateStorge(EmployeeListNew) {
    window.localStorage.removeItem('EmployeeList');
    localStorage.setItem('EmployeeList', JSON.stringify(EmployeeListNew));
}

// Xoa bnt Login
function User(UserName) {
    var user = document.createElement("h4");
    user.innerText = 'WellCome:  ' + UserName;
    user.style.color = "#ff0000";
    var logout = document.createElement('button');
    logout.value = "Logout";
    logout.className = "btn btn-success";
    logout.innerText = "Logout";
    if (logout) {
        logout.addEventListener('click', () => {
            window.localStorage.removeItem('userId');
            alert('Log Out Sussces !!')
        });
    }
    // xoa btn 
    let btn = document.getElementById("myBtn");
    btn.parentNode.appendChild(user);
    btn.parentNode.appendChild(logout);
    btn.remove();


}

// login 
try {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    btn.onclick = function() {
        modal.style.display = "block";
    }
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('containerr');
    if (signUpButton) {
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
    }
    if (signInButton) {
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }
} catch (err) {
    console.log(err.message);
}

function login() {
    // get Email and password
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let status = true;
    if (email == "") {
        alert('Email is empty');
        document.getElementById("emailloc").innerHTML = "Email is empty";
        status = false;
    }

    if (password == "") {
        alert('Password is empty');
        document.getElementById("passwordloc").innerHTML = "Password is empty";
        status = false;
    }
    let modal = document.getElementById("myModal");
    if (status) {
        status = false;
        lstUser.forEach(element => {
            if (element.email == email) {
                if (element.password == password) {
                    status = true;
                    // tao nguoi dung 
                    localStorage.setItem('userId', element.userId);
                    alert('login success!!');
                } else {
                    status = false;
                    alert('Password is wrong');
                    document.getElementById("passwordloc").innerHTML = "Password is wrong";
                }
            }
        });

    }

}



function getPhongBanById(id) {
    let result;
    Phong_ban_List.forEach(phongban => {
        if (phongban.PB_ID == id) {
            result = phongban.PB_Name;
        }
    });
    return result;
}

function getChucVuById(id) {
    let result;
    Chuc_Vu_List.forEach(chucvu => {
        if (chucvu.Chuc_vu_Id == id) {
            result = chucvu.Chuc_vu_Name;
        }
    });
    return result;
}

function updateTableAdmin() {
    tableEmployee.innerHTML = ``;
    for (let data of EmployeeList) {
        tableEmployee.insertAdjacentHTML('beforeend', `<div class="dsns_1" ">
          <div class="templatedsnv-item" ">
            <div class="dsnv-img">
              <img
                src="${data.img}">
            </div>
          </div>
          <div class="template-dsnv-info">
            <div class="template-dsnv-title ">
              <h4>${data.Ten_Nv} </h4>
              <p>${data.Gioi_Tinh}</p>
              <p>${data.Tuoi}</p>                
            </div>     
            <div class="form-group">
            <button type="button" class="btn  ShowInfBtn" data-toggle="modal" data-target="#EmployeeINF${data.MSNV}">                
            Show ALl 
            </button>
            </div>
          </div>
          </div>
        <div class="modal fade employee-modal" id="EmployeeINF${data.MSNV}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog " role="document">
  <div class="modal-content ">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">${data.Ten_Nv}</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <div class="container border modal-content">
    <form action="" class="row">
      <div class="col-6 form-group">
        <label for="Ten_Nv">Tên Nhân viên:</label><br>
        <input type="text" id="Tennhanvien${data.MSNV}" name="Ten_Nv" value="${data.Ten_Nv}" ><br>
        <label for="Tuoi">Tuoi:</label><br>
        <input type="text" id="Tuoi${data.MSNV}" name="Tuoi" value="${data.Tuoi}" ><br>
        <label for="Gioi_Tinh">Giới tính:</label><br>
        <input type="text" id="Gioitinh${data.MSNV}" name="Gioi_Tinh" value="${data.Gioi_Tinh}" ><br>
        <label for=" img">Ảnh (URL):</label><br>
        <input type="text" id="Anh${data.MSNV}" name=" img" value="${data.img}"  ><br>
      </div>
      <div class="col-6 form-group">
        <label for="Phong_ban">Phòng Ban:</label><br>
        <input type="text" id="Phongban${data.MSNV}" name="Phong_ban" value="${getPhongBanById(data.Phong_ban)}" ><br>
        <label for="Chuc_vu">Chức vụ:</label><br>
        <input type="text" id="Chucvu${data.MSNV}" name="Chuc_vu" value="${getChucVuById(data.Chuc_vu)}" ><br>
        <label for="So_Dien_Thoai">Sđt:</label><br>
        <input type="text" id="Sdt${data.MSNV}" name="So_Dien_Thoai" value="${data.So_Dien_Thoai}" ><br>
        <label for="Email">Email:</label><br>
        <input type="text" id="Email${data.MSNV}" name="Email" value="${data.Email}" ><br><br>
        <button type="button" class="btn btn-primary" onclick="updateEmployee(${data.MSNV})"data-dismiss="modal">Update</button>  
        <button type="button" class="btn btn-danger" onclick="deleteEmployee(${data.MSNV})" data-dismiss="modal">Delete</button> 
        </div>              
    </form>
  </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>    
    </div>
  </div>
</div>
</div>
        `);
    }

}


function updateTable() {

    tableEmployee.innerHTML = ``;
    for (let data of EmployeeList) {
        tableEmployee.insertAdjacentHTML('beforeend', `<div class="dsns_1" ">
            <div class="templatedsnv-item" ">
              <div class="dsnv-img">
                <img
                  src="${data.img}">
              </div>
            </div>
            <div class="template-dsnv-info">
              <div class="template-dsnv-title ">
                <h4>${data.Ten_Nv} </h4>
                <p>${data.Gioi_Tinh}</p>
                <p>${data.Tuoi}</p>                
              </div>     
              <div class="form-group">
              <button type="button" class="btn  ShowInfBtn" data-toggle="modal" data-target="#EmployeeINF${data.MSNV}">                
              Show ALl 
              </button>
              </div>
            </div>
            </div>
          <div class="modal fade employee-modal" id="EmployeeINF${data.MSNV}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog " role="document">
    <div class="modal-content ">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${data.Ten_Nv}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="container border modal-content">
      <form action="" class="row">
        <div class="col-6 form-group">
          <label for="Ten_Nv">Tên Nhân viên:</label><br>
          <input type="text" id="ShowTennhanvien" name="Ten_Nv" value="${data.Ten_Nv}" readonly><br>
          <label for="Tuoi">Tuoi:</label><br>
          <input type="text" id="ShowTuoi" name="Tuoi" value="${data.Tuoi}" readonly><br>
          <label for="Gioi_Tinh">Giới tính:</label><br>
          <input type="text" id="ShowGioitinh" name="Gioi_Tinh" value="${data.Gioi_Tinh}" readonly><br>
          <label for=" img">Ảnh (URL):</label><br>
          <input type="text" id="ShowAnh" name=" img" value="${data.img}" readonly ><br>
        </div>
        <div class="col-6 form-group">
          <label for="Phong_ban">Phòng Ban:</label><br>
          <input type="text" id="ShowPhongban" name="Phong_ban" value="${getPhongBanById(data.Phong_ban)}" readonly><br>
          <label for="Chuc_vu">Chức vụ:</label><br>
          <input type="text" id="ShowChucvu" name="Chuc_vu" value="${getChucVuById(data.Chuc_vu)}" readonly><br>
          <label for="So_Dien_Thoai">Sđt:</label><br>
          <input type="text" id="ShowSdt" name="So_Dien_Thoai" value="${data.So_Dien_Thoai}" readonly><br>
          <label for="Email">Email:</label><br>
          <input type="text" id="ShowEmail" name="Email" value="${data.Email}" readonly><br><br>
        </div>              
      </form>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>    
      </div>
    </div>
  </div>
</div>
          `);
    }

}

function updateEmployee(MSNV) {

    Ten_Nv1 = document.getElementById(`Tennhanvien${MSNV}`).value;
    Tuoi1 = document.getElementById(`Tuoi${MSNV}`).value;
    Gioi_Tinh1 = document.getElementById(`Gioitinh${MSNV}`).value;
    img1 = document.getElementById(`Anh${MSNV}`).value;
    Phong_ban1 = document.getElementById(`Phongban${MSNV}`).value;
    Chuc_vu1 = document.getElementById(`Chucvu${MSNV}`).value;
    So_Dien_Thoai1 = document.getElementById(`Sdt${MSNV}`).value;
    Email1 = document.getElementById(`Email${MSNV}`).value;
    let cf = confirm(`Ban Co muon update Eployee: ${Ten_Nv1}`);
    if (cf) {
        EmployeeList.forEach(employee => {
            if (employee.MSNV == MSNV) {
                employee.Ten_Nv = Ten_Nv1;
                employee.Tuoi = Tuoi1;
                employee.Gioi_Tinh = Gioi_Tinh1;
                employee.img = img1;
                employee.Phong_ban = Phong_ban1;
                employee.Chuc_vu = Chuc_vu1;
                employee.So_Dien_Thoai = So_Dien_Thoai1;
                employee.Email1;
            }
        });
        // luu vao storge
        // document.getElementById(`EmployeeINF${MSNV}`).style.opacity = 0;
        updateStorge(EmployeeList);
        updateTableAdmin();
        alert('Update Success!!');
    }

}

function deleteEmployee(MSNV) {
    Ten_Nv1 = document.getElementById(`Tennhanvien${MSNV}`).value;
    let cf = confirm(`Ban Co muon xoa employee: ${Ten_Nv1}`);
    if (cf) {
        for (let index = 0; index < EmployeeList.length; index++) {
            if (EmployeeList[index].MSNV == MSNV) {
                EmployeeList.splice(index, 1);
            }

        }
        updateStorge(EmployeeList);
        updateTableAdmin();
    }

}



// function updatePhongBan() {
//     listPhongBan.innerHTML = '';
//     listPhongBan.insertAdjacentHTML('beforeend', ` < option value = "all" > Phong Ban < /option>`);
//     Phong_ban_List.forEach(pb => {
//         listPhongBan.insertAdjacentHTML('beforeend', `<option value="${pb.PB_ID}">${pb.PB_Name}</option>`);
//     });
// }

// function updateChucVu() {
//     listChucVu.innerHTML = ``;
//     listChucVu.insertAdjacentHTML('beforeend', `  <option value="all">Chuc Vu</option>`);
//     Chuc_Vu_List.forEach(cv => {
//         listChucVu.insertAdjacentHTML('beforeend', `<option value="${cv.Chuc_vu_Id}">${cv.Chuc_vu_Name}</option>`)
//     });
// }

function searchByEmployeeName(employyName) {
    let status = false;
    tableEmployee.innerHTML = ``;
    for (let data of EmployeeList) {
        if (data.Ten_Nv.match(employyName)) {
            tableEmployee.insertAdjacentHTML('beforeend', `<div class="dsns_1" ">
            <div class="templatedsnv-item" ">
              <div class="dsnv-img">
                <img
                  src="${data.img}">
              </div>
            </div>
            <div class="template-dsnv-info">
              <div class="template-dsnv-title ">
                <h4>${data.Ten_Nv} </h4>
                <p>${data.Gioi_Tinh}</p>
                <p>${data.Tuoi}</p>                
              </div>     
              <div class="form-group">
              <button type="button" class="btn  ShowInfBtn" data-toggle="modal" data-target="#EmployeeINF${data.MSNV}">                
              Show ALl 
              </button>
              </div>
            </div>
            </div>
          <div class="modal fade employee-modal" id="EmployeeINF${data.MSNV}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog " role="document">
    <div class="modal-content ">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${data.Ten_Nv}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="container border modal-content">
      <form action="" class="row">
        <div class="col-6 form-group">
          <label for="Ten_Nv">Tên Nhân viên:</label><br>
          <input type="text" id="ShowTennhanvien" name="Ten_Nv" value="${data.Ten_Nv}" readonly><br>
          <label for="Tuoi">Tuoi:</label><br>
          <input type="text" id="ShowTuoi" name="Tuoi" value="${data.Tuoi}" readonly><br>
          <label for="Gioi_Tinh">Giới tính:</label><br>
          <input type="text" id="ShowGioitinh" name="Gioi_Tinh" value="${data.Gioi_Tinh}" readonly><br>
          <label for=" img">Ảnh (URL):</label><br>
          <input type="text" id="ShowAnh" name=" img" value="${data.img}" readonly ><br>
        </div>
        <div class="col-6 form-group">
          <label for="Phong_ban">Phòng Ban:</label><br>
          <input type="text" id="ShowPhongban" name="Phong_ban" value="${getPhongBanById(data.Phong_ban)}" readonly><br>
          <label for="Chuc_vu">Chức vụ:</label><br>
          <input type="text" id="ShowChucvu" name="Chuc_vu" value="${getChucVuById(data.Chuc_vu)}" readonly><br>
          <label for="So_Dien_Thoai">Sđt:</label><br>
          <input type="text" id="ShowSdt" name="So_Dien_Thoai" value="${data.So_Dien_Thoai}" readonly><br>
          <label for="Email">Email:</label><br>
          <input type="text" id="ShowEmail" name="Email" value="${data.Email}" readonly><br><br>
        </div>              
      </form>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>    
      </div>
    </div>
  </div>
</div>
          `);
            status = true;
        }
    };
    if (status != true) {
        alert(`Employee: ${employyName.value} is not Exist !!`);

    }
}

function serch() {
    let keyword = document.getElementById(`myInput`).value;

    if (keyword == "") {
        updateTable();
        alert(`Key word is empty !!`);
        return;
    }
    searchByEmployeeName(keyword);
}

// function showINF(MSNV) {
//     let Infomation = document.getElementById('Infomation-area');
//     Infomation.innerHTML = '';
//     EmployeeList.forEach(element => {
//         if (element.MSNV == MSNV) {
//             Infomation.insertAdjacentHTML('beforeend', `      <div class="container border modal-content">
//             <form action="" class="row">
//               <div class="col-6 form-group">
//                 <label for="Ten_Nv">Tên Nhân viên:</label><br>
//                 <input type="text"  name="Ten_Nv" value="${element.Ten_Nv}" readonly><br>
//                 <label for="Tuoi">Tuoi:</label><br>
//                 <input type="text"  name="Tuoi" value="${element.Tuoi}" readonly><br>
//                 <label for="Gioi_Tinh">Giới tính:</label><br>
//                 <input type="text" name="Gioi_Tinh" value="${element.Gioi_Tinh}" readonly><br>
//                 <label for=" img">Ảnh (URL):</label><br>
//                 <input type="text"  name=" img" value="${element.img}" readonly ><br>
//               </div>
//               <div class="col-6 form-group">
//                 <label for="Phong_ban">Phòng Ban:</label><br>
//                 <input type="text"  name="Phong_ban" value="${element.Phong_ban}" readonly><br>
//                 <label for="Chuc_vu">Chức vụ:</label><br>
//                 <input type="text"  name="Chuc_vu" value="${element.Chuc_vu}" readonly><br>
//                 <label for="So_Dien_Thoai">Sđt:</label><br>
//                 <input type="text"  name="So_Dien_Thoai" value="${element.So_Dien_Thoai}" readonly><br>
//                 <label for="Email">Email:</label><br>
//                 <input type="text"  name="Email" value="${element.Email}" readonly><br><br>
//               </div>              
//             </form>
//           </div>`)
//         }
//     });
// }

function createEmployee() {
    // MSNV = document.getElementById("MSNhanvien")
    Ten_Nv1 = document.getElementById("Tennhanvien").value;
    Tuoi1 = document.getElementById("Tuoi").value;
    Gioi_Tinh1 = document.getElementById("Gioitinh").value;
    img1 = document.getElementById("Anh").value;
    Phong_ban1 = document.getElementById("Phongban").value;
    Chuc_vu1 = document.getElementById("Chucvu").value;
    So_Dien_Thoai1 = document.getElementById("Sdt").value;
    Email1 = document.getElementById("Email").value;
    let e = {
        MSNV: EmployeeList.length + 1,
        Ten_Nv: Ten_Nv1,
        Tuoi: Tuoi1,
        Gioi_Tinh: Gioi_Tinh1,
        img: img1,
        Phong_ban: Phong_ban1,
        Chuc_vu: Chuc_vu1,
        So_Dien_Thoai: So_Dien_Thoai1,
        Email: Email1,
    }
    console.log(e);
    EmployeeList.push(e);
    // luu vao storge
    updateStorge(EmployeeList);
    updateTable();

}
// updateStorge(EmployeeList);t
UpdateList();
checkUserLogin();