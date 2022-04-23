<template>
  <div class="auth_right_logo">
    <form class="enyataForms" @submit.prevent="login">
      <h4>Login</h4>
      <p>Kindly enter your details to log in</p>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <input
              v-model.trim="email"
              @input="validateInputs"
              class=""
              id="email"
              type="email"
            />
            <label for="email" class="enyataLabel"> Email Address </label>

            <transition name="fade">
              <p
                style="
                  color: red !important;
                  font-size: 13px !important;
                  margin-top: 8px;
                  margin-bottom: 28px;
                  text-align: left !important;
                "
                v-if="emailErrorMessage"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 20 20"
                  svg-inline=""
                  role="presentation"
                  focusable="false"
                  tabindex="-1"
                  style="color: red !important; margin-right: 10px"
                  fill="red"
                >
                  <path
                    d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 11c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4H9v-2h2v2z"
                  ></path>
                </svg>
                {{ emailErrorMessage }}
              </p>
            </transition>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <input
              class=""
              v-model.trim="password"
              @input="validePassword"
              id="password"
              type="password"
            />
            <label for="password" class="enyataLabel"> Password </label>

            <div>
              <ul class="list_unstyled" v-if="isTypingPassword">
                <li>
                  <span class="low_upper_case">
                    <i
                      class="fa"
                      :class="isLowerAndUpperCase ? 'fa-check' : 'fa-times'"
                      arial-hidden="true"
                    ></i>
                    Lowercase &amp; Uppercase
                  </span>
                </li>
                <li>
                  <span class="one_number">
                    <i
                      class="fa"
                      :class="isNumber ? 'fa-check' : 'fa-times'"
                      arial-hidden="true"
                    ></i>
                    Number (0 - 9)
                  </span>
                </li>
                <li>
                  <span class="one_special_char">
                    <i
                      class="fa"
                      :class="isSpecialCharacters ? 'fa-check' : 'fa-times'"
                      arial-hidden="true"
                    ></i>
                    Special character (!@#$^&*)
                  </span>
                </li>
                <li>
                  <span class="eight_character">
                    <i
                      class="fa"
                      :class="isEightDigits ? 'fa-check' : 'fa-times'"
                      arial-hidden="true"
                    ></i>
                    Atleast 8 characters
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <button :disabled="emptyFields" type="submit">
            <span v-if="!processing">Login</span>
            <span
              class="spinner-border spinner-border-sm"
              style="color: #fff"
              role="status"
              v-if="processing"
              aria-hidden="true"
            ></span>
          </button>
        </div>
        <div class="col-md-12">
          <div class="has_link">
            <a href="javascript:;">Forgot your password?</a>
          </div>
        </div>
      </div>
      <div class="has_terms_link">
        <a href="javascript:;">Privacy Policy</a>
        and <a href="javascript:;">Terms of services</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      processing: false,
      emailErrorMessage: "",
      passwordErrorMessage: "",
      emptyFields: true,

      isTypingPassword: false,
      isLowerAndUpperCase: false,
      isNumber: false,
      isSpecialCharacters: false,
      isEightDigits: false,
    };
  },

  methods: {
    validePassword() {
      if (this.password) {
        this.isTypingPassword = true;
        this.checkPasswordValidations();
        this.validateInputs();
      } else {
        this.isTypingPassword = false;
        this.isTypingPassword = false;
        this.isLowerAndUpperCase = false;
        this.isNumber = false;
        this.isSpecialCharacters = false;
        this.isEightDigits = false;
      }
    },

    checkPasswordValidations() {
      this.passwordError = false;

      // check if it contains lower and uppercase
      if (this.password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        this.isLowerAndUpperCase = true;
      } else {
        this.isLowerAndUpperCase = false;
      }

      // check if it contains number
      if (this.password.match(/([0-9])/)) {
        this.isNumber = true;
      } else {
        this.isNumber = false;
      }

      // check if it contains special characters
      if (this.password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        this.isSpecialCharacters = true;
      } else {
        this.isSpecialCharacters = false;
      }
      // check if it's more than 7
      if (this.password.length > 7) {
        this.isEightDigits = true;
      } else {
        this.isEightDigits = false;
      }
    },
    validateInputs: function () {
      if (!this.email) {
        this.emptyFields = true;
        this.emailErrorMessage = "Please input your email address ";

        return false;
      }

      if (this.email && !this.validEmail(this.email)) {
        this.emptyFields = true;
        this.emailErrorMessage = "Invalid email address ";
        return false;
      }

      // if (!this.password) {
      //   this.emptyFields = true;
      //   return;
      // }

      if (this.password && !this.isLowerAndUpperCase) {
        this.emptyFields = true;

        return;
      }

      if (this.password && !this.isNumber) {
        this.emptyFields = true;
        return;
      }

      if (this.password && !this.isSpecialCharacters) {
        this.emptyFields = true;
        return;
      }

      if (this.password && !this.isEightDigits) {
        this.emptyFields = true;
        return;
      }

      this.emptyFields = false;

      this.emailErrorMessage = "";

      return true;
    },

    login: function () {
      this.processing = true;
      this.emptyFields = true;
      setTimeout(() => {
        this.globalFunctions();
        this.$router.push({
          name: "Home",
        });
        this.processing = false;
      }, 2000);
    },
  },

  mounted() {
    this.setCurrentPage(this.$router.history.current.name);
    this.scrollPageToTop();
  },
};
</script>

<style scoped>
.list_unstyled {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 10px;
}

.list_unstyled li {
  font-size: 14px;
}

.fa-times {
  color: #ff1201;
}

.fa-check {
  color: #02b502;
}
</style>
