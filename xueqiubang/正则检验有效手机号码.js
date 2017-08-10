function isMobile(phoneNum) {
	var reg = /^(\+86\s?)?1\d{10}$/;
	return reg.test(phoneNum);
}