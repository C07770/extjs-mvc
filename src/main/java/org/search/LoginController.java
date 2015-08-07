package org.search;

import org.search.model.LoginResponseWrapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/login")
public class LoginController {

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	@ResponseBody
	public String login(@RequestParam String username,
			@RequestParam String password) {
		LoginResponseWrapper response = new LoginResponseWrapper();

		if (username.equals("KishanKoladiya") && password.equals("password")) {
			response.setMessage("Login successful.");
			response.setStatus(true);
		} else {
			response.setMessage("Login failed.");
			response.setStatus(false);
		}

		return response.toString();
	}
}
