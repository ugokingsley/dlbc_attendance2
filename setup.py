from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in dlbc_attendance/__init__.py
from dlbc_attendance import __version__ as version

setup(
	name='dlbc_attendance',
	version=version,
	description='DLBC Attendance App',
	author='ugo',
	author_email='ugokingsley5@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
