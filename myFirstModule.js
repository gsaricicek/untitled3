//we can create our own modules, and easily include them in your applications.
//this module returns the current date and time.

exports.myDateTime = function () {  //export kelimesi ile özellikleri ve metotları module file'ın dışında da erişilebilir yapıyoruz.
    return Date();
};