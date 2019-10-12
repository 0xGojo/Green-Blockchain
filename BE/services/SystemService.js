const fs = require('fs');
const path = require('path');

class SystemService {
    async saveFile(data, name) {
        const uploads = path.join(__dirname, `../uploads/${name}`);
        fs.writeFileSync(uploads, data, function (err) {
            if (err) {
                log.error('writeFileSync', err);
                return jsonError(errors.SYSTEM_ERROR);
            } else {
                return jsonSuccess();
            }
        });
    }

    async removeFile(file) {
        const uploads = path.join(__dirname, `..${file}`);
        fs.unlinkSync(uploads);
    }
}

module.exports = SystemService;
